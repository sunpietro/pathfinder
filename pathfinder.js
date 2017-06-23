((window) => {
    const container = document.querySelector('.pathfinder');
    const structure = {};
    const data = [];

    window.data.forEach(item => {
        if (structure[item.overflow]) {
            structure[item.overflow].parent = [...structure[item.overflow].parent, item.id]
        }

        structure[item.id] = {
            id: item.id,
            parent: [],
            overflow: item.overflow
        }
    });

    Object.keys(structure).forEach(key => {
        data.push(structure[key]);
    });

    const findPaths = (item, path) => (!item.overflow) ? [...path, item.id] : findPaths(structure[item.overflow], [...path, item.id]);
    const noParents = data.filter(item => !item.parent.length);
    const paths = noParents.map(item => findPaths(item, []));

    console.log('paths', paths.map(path => path.join(',')));
})(window);