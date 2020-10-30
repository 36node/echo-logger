## @36node/echo-logger

用于给消息队列提供测试数据

#### 使用及调试方法

1. 安装：`yarn`
2. 启动： `yarn start`
3. 打包： `yarn build`
4. 单元测试： `yarn test`
5. 集成测试： `yarn test:int`

#### 测试说明

_测试文件通过 fastman 库 对接 Postman_

- 全局安装 fastman `yarn global add @36node/fastman`
- 通过[链接](https://go.postman.co/integrations/services/pm_pro_api)获取 Postman 的 key，并设置 `fastman config -a <your-postman-api-key>`
- 使用`fastman ls`获取 Postman 的全部 collections
- 使用`fastman import ./test/xxxx/collection.json` 将 collection.json 文件导入 Postman
- 使用`fastman export "Petstore Service" ./test/xxxx/collection.json`将 Postman 中的 collection 导入当前工程的测试中
