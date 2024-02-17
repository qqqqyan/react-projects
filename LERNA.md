# monorepo管理

#### 问题
子项目过多，每个子项目的安装都需要大量的时间和占用空间

#### 步骤（开发者）

1. 把子项目移动到packages文件夹
2. 安装lerna@2
3. 添加workspace
4. npx lerna init
5. npx lerna bootstrap
  
#### 步骤（维护者）

1. npm install
2. npx lerna bootstrap