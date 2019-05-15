const bit = require('bit-bin');
const dirTree = require("directory-tree");
const tree = dirTree("./src");
// console.log(JSON.stringify(tree, null, 2))

// This function assume a 3 level structure, it can be modified to be more generic by making it recursive
const buildComps = (tree) => {
  let comps = [];
  tree.children.forEach((moduleTree) => {
    const compsToAdd = handleModule(moduleTree);
    comps = comps.concat(compsToAdd);
  })
  return comps; 
}

const handleModule = (moduleTree) => {
  let comps = [];
  moduleTree.children.forEach((portalTree) => {
    const compsToAdd = handlePortal(portalTree, moduleTree.name);
    comps = comps.concat(compsToAdd);
  })
  return comps;
}

const handlePortal = (portalTree, namespacePrefix) => {
  const comps = portalTree.children.map((compTree) => {
    const namespace = `${namespacePrefix}/${portalTree.name}`;
    const compToAdd = handleComp(compTree, namespace);
    return compToAdd;
  })
  return comps;
}

// This function will hard coded set the first file to be the main file, it can be changed to support more logic
const handleComp = (compTree, namespace) => {
  const compToAdd = {
    id: compTree.name,
    main: compTree.children[0].path,
    namespace
  };
  return compToAdd;
}

const compsToAdd = buildComps(tree);
console.log(JSON.stringify(compsToAdd, null, 2))

// bit.addMany

