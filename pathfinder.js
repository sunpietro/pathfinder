((window) => {
    const container = document.querySelector('.pathfinder');
    const data = [];
    const buildHash = (hash, item) => {
        const oveflow = item.overflow;
        const id = item.id;

        if (overflow) {
            if (hash[overflow]) {
                hash[overflow].parent = [...hash[overflow].parent, id]
            } else {
                hash[overflow] = {
                    id: '',
                    parent: [id],
                    overflow: ''
                };
            }
        }

        hash[id] = {
            id: id,
            parent: (hash[id] && hash[id].parent.length) ? hash[id].parent : [],
            overflow: overflow
        }

        return hash;
    };
    const hash = window.data.reduce(buildHash, {});

    Object.keys(structure).forEach(key => data.push(structure[key]));

    const findPaths = (item, path) => (!item.overflow) ? [...path, item.id] : findPaths(hash[item.overflow], [...path, item.id]);
    const noParents = data.filter(item => !item.parent.length);
    const paths = noParents.map(item => findPaths(item, []));

    console.log('paths', paths.map(path => path.join(',')));
})(window);