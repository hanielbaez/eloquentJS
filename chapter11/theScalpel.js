//find the scalpel that they occasionally use on special missions—say, to cut through screen doors or packaging. 

async function locateScalpel(nest) {
    let list = await network(nest).map(async name => {
        const scalpelIs = await anyStorage(nest, name, 'scalpel');
        if (scalpelIs === name) return name;
    });
    return (await Promise.all(list)).filter(n => n)[0]
}

function locateScalpel2(nest) {
    let list = network(nest).map(name => {
        return anyStorage(nest, name, 'scalpel').then(response => name === response && name)
    })
    return Promise.all(list).then(response => response.filter(n => n)[0]);
}


locateScalpel(bigOak).then(console.log);
locateScalpel2(bigOak).then(console.log);
  // → Butcher Shop