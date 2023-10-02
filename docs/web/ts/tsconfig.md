---
author: "Liaoyi"
date: 2023-02-01
---

# TypeScript 编译配置

TypeScript 编译配置指的是 TypeScript 编译器的选项和参数，这些选项和参数描述了 TypeScript 编译器应如何将 TypeScript 代码编译为可执行的 JavaScript 代码.


## tsc
tsc 命令是用于启动 TypeScript 编译器进行编译的命令行工具

在执行 `tsc` 命令时，默认情况下，TypeScript 编译器会在当前目录下查找 `tsconfig.json` 文件，并根据该文件中指定的选项进行编译。如果 `tsconfig.json` 文件不存在，则会使用默认的编译选项和文件列表进行编译；而通过 `tsc` 命令的参数，可以覆盖 `tsconfig.json` 文件中的部分或全部编译选项。


### 安装 TypeScript 命令行工具
```shell
pnpm add -g typescript
```


### 常用命令

```shell
tsx <file>                                    # 编译指定的文件
tsx <dir>                                     # 编译指定的目录

tsx -h, --help                                # 查看帮助信息
tsx -v, --version                             # 查看版本信息
tsx -w, --watch                               # 监听文件变化并自动编译
tsx -p, --project <path>                      # 指定 tsconfig.json 文件的路径
tsx -b, --build                               # 构建项目

tsx --init                                    # 创建 tsconfig.json 文件
tsx --showConfig                              # 查看当前的编译选项
```


## tsconfig.json

`tsconfig.json` 是用于配置 TypeScript 编译器的选项，通过` tsconfig.json` 文件并在其中指定编译选项，可以让开发者在运行 tsc 命令时省略大量的命令行参数，从而提高开发效率和代码质量。

### 创建 tsconfig.json 文件

```shell
tsc --init
```


### 文件的配置

[tsconfig.json详细配置文档 | TypeScript 官方文档](https://www.typescriptlang.org/tsconfig)


#### compilerOptions

> compilerOptions 是用于配置 TypeScript 编译器的选项。



```json
{
  /* 项目相关 */
  "incremental": true,                              /* 增量编译，允许将编译结果保存到 .tsbuildinfo 文件中，以优化后续的编译速度 */
  "composite": true,                                /* 组合项目，允许将多个项目组合成一个项目，以优化编译速度 */
  "tsBuildInfoFile": "./",                          /* 指定 .tsbuildinfo 文件的输出目录 */
  "disableSourceOfProjectReferenceRedirect": true,  /* 禁用项目引用的源文件重定向 */
  "disableSolutionSearching": true,                 /* 禁用解决方案搜索 */
  "disableReferencedProjectLoad": true,             /* 禁用引用的项目加载 */

  /* 语言和环境 */
  "target": "esnext",                               /* 编译目标，可选值：es3、es5、es6、es2015、es2016、es2017、es2018、es2019、es2020、esnext */
  "lib": ["dom", "dom.iterable", "esnext"],         /* 编译时需要引入的库文件 */
  "jsx": "preserve",                                /* 控制 JSX 在 JavaScript 文件中的输出方式，可选值：react、react-jsx、react-jsxdev、react-native、preserve */
  "experimentalDecorators": true,                   /* 启用实验性的装饰器语法 */
  "emitDecoratorMetadata": true,                    /* 启用装饰器元数据 */
  "jsxFactory": "React.createElement",              /* 指定 JSX 的工厂函数 */
  "jsxFragmentFactory": "React.Fragment",           /* 指定 JSX 的片段工厂函数 */
  "jsxImportSource": "react",                       /* 指定 JSX 的导入源 */
  "reactNamespace": "React",                        /* 指定 React 的命名空间 */
  "noLib": true,                                    /* 不引入默认的库文件 */
  "useDefineForClassFields": true,                  /* 使用 ECMAScript 中的类字段定义语法 */
  "moduleDetection": "auto",                        /* 模块检测，可选值：auto、legacy、force */

  /* 模块解析选项 */
  "module": "commonjs",                             /* 模块解析策略，可选值：none、commonjs、amd、system、umd、es2015、esnext */
  "rootDir": "./",                                  /* 指定项目根目录 */
  "moduleResolution": "node",                       /* 模块解析策略，可选值：node、classic */
  "baseUrl": "./",                                  /* 指定模块解析的基本目录 */
  "paths": {},                                      /* 指定模块名到基于 baseUrl 的路径映射 */
  "rootDirs": [],                                   /* 指定多个根目录 */
  "typeRoots": [],                                  /* 指定类型声明文件的查找目录 */
  "types": [],                                      /* 指定需要引入的类型声明文件 */
  "allowUmdGlobalAccess": true,                     /* 允许 UMD 模块访问全局变量 */
  "moduleSuffixes": [],                             /* 指定模块后缀名 */
  "allowImportingTsExtensions": true,               /* 允许导入 .ts 文件 */
  "resolvePackageJsonExports": true,                /* 解析 package.json 中的 exports 字段 */
  "resolvePackageJsonImports": true,                /* 解析 package.json 中的 imports 字段 */
  "customConditions": [],                           /* 指定自定义的条件 */
  "resolveJsonModule": true,                        /* 解析 JSON 模块 */
  "allowArbitraryExtensions": true,                 /* 允许导入任意扩展名的文件 */
  "noResolve": true,                                /* 不解析模块 */
  "allowJs": true,                                  /* 允许编译 JavaScript 文件 */
  "checkJs": true,                                  /* 允许检查 JavaScript 文件 */
  "maxNodeModuleJsDepth": 1,                        /* 指定在 node_modules 中查找 JavaScript 文件的深度 */

  /* 源码映射选项 */
  "declaration": true,                              /* 生成声明文件 */
  "declarationMap": true,                           /* 生成声明文件映射文件 */
  "emitDeclarationOnly": true,                      /* 只生成声明文件 */
  "sourceMap": true,                                /* 生成源码映射文件 */
  "inlineSourceMap": true,                          /* 将源码映射文件内联到输出文件中 */
  "outFile": "./",                                  /* 将输出文件合并为一个文件 */
  "outDir": "./",                                   /* 指定输出目录 */
  "removeComments": true,                           /* 删除注释 */
  "noEmit": true,                                   /* 不生成输出文件 */
  "importHelpers": true,                            /* 从 tslib 导入辅助函数 */
  "importsNotUsedAsValues": "remove",               /* 删除未使用的导入 */
  "downlevelIteration": true,                       /* 降级迭代器 */
  "sourceRoot": "",                                 /* 指定源码根目录 */
  "mapRoot": "",                                    /* 指定源码映射文件的根目录 */
  "inlineSources": true,                            /* 将源码内联到源码映射文件中 */
  "emitBOM": true,                                  /* 在输出文件中添加 BOM */
  "newLine": "lf",                                  /* 指定换行符，可选值：crlf、lf */
  "stripInternal": true,                            /* 删除内部注释 */
  "noEmitHelpers": true,                            /* 不生成辅助函数 */
  "noEmitOnError": true,                            /* 编译错误时不生成输出文件 */
  "preserveConstEnums": true,                       /* 保留 const 枚举 */
  "declarationDir": "./",                           /* 指定声明文件的输出目录 */
  "preserveValueImports": true,                     /* 保留值导入 */
  "isolatedModules": true,                          /* 禁用一些不支持的特性 */
  "verbatimModuleSyntax": true,                     /* 禁用模块解析 */
  "allowSyntheticDefaultImports": true,             /* 允许从没有默认导出的模块中导入 */
  "esModuleInterop": true,                          /* 允许从 CommonJS 模块中导入 */
  "preserveSymlinks": true,                         /* 保留符号链接 */
  "forceConsistentCasingInFileNames": true,         /* 强制文件名大小写一致 */

  /* 类型检查选项 */
  "strict": true,                                   /* 启用所有严格类型检查选项 */
  "noImplicitAny": true,                            /* 禁止隐式的 any 类型 */
  "strictNullChecks": true,                         /* 启用严格的空值检查 */
  "strictFunctionTypes": true,                      /* 启用严格的函数类型检查 */
  "strictBindCallApply": true,                      /* 启用严格的 bind/call/apply 检查 */
  "strictPropertyInitialization": true,             /* 启用严格的属性初始化检查 */
  "noImplicitThis": true,                           /* 禁止 this 表达式隐式的 any 类型 */
  "useUnknownInCatchVariables": true,               /* 使用 unknown 替代 catch 变量的 any 类型 */
  "alwaysStrict": true,                             /* 在每个源文件中添加 'use strict' */
  "noUnusedLocals": true,                           /* 禁止未使用的局部变量 */
  "noUnusedParameters": true,                       /* 禁止未使用的参数 */
  "exactOptionalPropertyTypes": true,               /* 启用精确的可选属性类型检查 */
  "noImplicitReturns": true,                        /* 禁止函数中的隐式返回 */
  "noFallthroughCasesInSwitch": true,               /* 禁止 switch 语句的落空 case */
  "noUncheckedIndexedAccess": true,                 /* 禁止未检查的索引访问 */
  "noImplicitOverride": true,                       /* 禁止重写类成员的隐式声明 */
  "noPropertyAccessFromIndexSignature": true,       /* 禁止从索引签名中访问属性 */
  "allowUnusedLabels": true,                        /* 允许未使用的标签 */
  "allowUnreachableCode": true,                     /* 允许不可达代码 */

  /* 附加检查 */
  "skipDefaultLibCheck": true,                      /* 跳过对默认库的类型检查 */
  "skipLibCheck": true,                             /* 跳过对声明文件的类型检查 */

  /* 输出格式 */
  "noErrorTruncation": true,                        /* 禁止错误信息截断 */
  "preserveWatchOutput": true,                      /* 保留 watch 输出 */
  "pretty": true                                    /* 使用漂亮的输出 */
}
```


<br />

**常用配置**


| **include** | **指定编译文件默认是编译当前目录下所有的ts文件** |
| --- | --- |
| `exclude` | 指定排除的文件 |
| `target` | 指定编译js 的版本例如`es5`  `es6` |
| `allowJS` | 是否允许编译js文件 |
| `removeComments` | 是否在编译过程中删除文件中的注释 |
| `rootDir` | 编译文件的目录 |
| `outDir` | 输出的目录 |
| `sourceMap` | 代码源文件 |
| `strict` | 严格模式 |
| `module` | 默认 `CommonJS`  可选`es6`模式 `amd`  `umd` 等 |


#### files

```json
// files 是用于指定 TypeScript 编译器应该编译哪些文件（支持相对路径、绝对路径）
// efault: false

{
  "files": ["core.ts", "types.ts", "utils.ts", "maomao.ts"]
}
```

::: warning  ⚠️
 当指定的文件或文件夹不存在时，会提示错误 
:::


#### include


```json
// include 是用于指定 TypeScript 编译器应该编译哪些文件（支持相对路径、绝对路径和 glob 模式）
// default: []

{
  "include": ["src/**/*", "tests/**/*"]
}
```

<br />

::: danger 
**files 和 include**

- **files**
   - 不会排除 **exclude** 中指定的文件或目录
   - 支持相对路径、绝对路径
   - 路径必须指向文件，不能指向目录
- **include**
   - 会排除 **exclude** 中指定的文件或目录
   - 支持相对路径、绝对路径和 **glob** 模式
   - 路径可以指向文件，也可以指向目录
:::


#### exclude

```json
// exclude 是用于指定 TypeScript 编译器应该忽略哪些文件，从而不对这些文件进行编译
// default: ["node_modules", "bower_components", "jspm_packages", "outDir"]

{
  "exclude": ["node_modules", "maomao"]
}
```

#### extends
```json
// extends 是用于指定父级配置文件的路径，从而继承父级配置文件中的编译选项
// default: false

{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```


#### references
```json
// TypeScript 3.0 新增的特性，用于将多个 TypeScript 项目组合在一起进行编译
// references 是用于指定项目引用的路径，从而引用项目
// default: false

{
  "compilerOptions": {
    "outDir": "./dist"
  },
  "references": [{ "path": "./tsconfig.base.json" }]
}
```
