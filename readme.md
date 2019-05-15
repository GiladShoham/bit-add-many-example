## description
This is an example project to demonstrate usage of bit's addMany progremattic API.
It assume the fs structure is like this
```sh
src
├── module1
│   ├── m1-portal1
│   │   ├── m1-p1-comp1
│   │   │   └── m1-p1-c1-file1.js
│   │   └── m1-p1-comp2
│   │       └── m1-p1-c2-file1.js
│   └── m1-portal2
│       ├── m1-p2-comp1
│       │   └── m1-p2-c1-file1.js
│       └── m1-p2-comp2
│           └── m1-p2-c2-file1.js
└── module2
    ├── m2-portal1
    │   ├── m2-p1-comp1
    │   │   └── m2-p1-c1-file1.js
    │   └── m2-p1-comp2
    │       └── m2-p1-c2-file1.js
    └── m2-portal2
        ├── m2-p2-comp1
        │   └── m2-p2-c1-file1.js
        └── m2-p2-comp2
            └── m2-p2-c2-file1.js
```
any module can contain few portals and each portal might contain few components.
Each component is a directory with one file (can be extended to support more than one file in each component folder).

You can see the addMany types in this gist:

[addManyAPI.js](https://gist.github.com/GiladShoham/b59ee81cd806aa1510b11cd2a1405420)

**This API is experimental, and it will probably change in the near future** 

The final result is a .bitmap file containing all the components, and `bit status` should show the following output:
```sh
new components
(use "bit tag --all [version]" to lock a version with all your changes)

     > module1/m1-portal1/m1-p1-comp1 ... ok
     > module1/m1-portal1/m1-p1-comp2 ... ok
     > module1/m1-portal2/m1-p2-comp1 ... ok
     > module1/m1-portal2/m1-p2-comp2 ... ok
     > module2/m2-portal1/m2-p1-comp1 ... ok
     > module2/m2-portal1/m2-p1-comp2 ... ok
     > module2/m2-portal2/m2-p2-comp1 ... ok
     > module2/m2-portal2/m2-p2-comp2 ... ok
```