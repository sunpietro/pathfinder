((window) => {
    const container = document.querySelector('.pathfinder');
    const data = window.data;
    const structure = {};

    data.forEach(item => {
        if (structure[item.overflow]) {
            structure[item.overflow].parent = [...structure[item.overflow].parent, item.id]
        }

        structure[item.id] = {
            parent: [],
            overflow: item.overflow
        }
    });

    const noParentsWithOverflow = [];

    Object.keys(structure).forEach(key => {
        if (!structure[key].parent.length && !!structure[key].overflow) {
            noParentsWithOverflow.push(structure[key]);
        }
    });

    console.log('no:parents', noParentsWithOverflow);

    const flows = {};
    const getChildren = (superParentId, parentId, item) => {
        if (item.overflow) {
            if (item.overflow === superParentId) {
                flows[superParentId] = {
                    [item.overflow]: 0
                }
            } else {

            }
        }
    };

    noParentsWithOverflow.forEach(item => {

    });
})(window);