# 测试用例

项目增删改查业务逻辑测试

请严格按照 swagger 文档检查请求和返回结果，不再一一赘述。

需要处理边界条件，比如项目不存在时返回 404 错误。

## 数据清单:

- USER: 公共用户

```
// id
5cb9a4edc48ad400120d28b0
// token
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNiOWE0ZWRjNDhhZDQwMDEyMGQyOGIwIiwiZXhwIjoyNTU3MDM1MjU4LCJucyI6Ii9hZHZlbnR1cmVyIn0.gKb4bRq2RN_gFO03nYDYgjeqTsNdTvmjcnjLbvSfmXVRbX2B0jxl0gaPN31EKfOg1GKkRUxY-y9oqYITajOAcfqfUFGj4p-42iXL8IFiKO8aLmmQl7AuTo_Z0wfL630w8ZSeunfJ4VhbucaCzghzBHPqdD73QdibqNOyK0S8s8E

 ADMIN: 管理员用户
//id
5f8558287f1cb500116720f9
//token
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWY4NTU4Mjg3ZjFjYjUwMDExNjcyMGY5IiwiZXhwIjoyNTU3MDM1MjU4LCJucyI6InlvdXl1YW4iLCJyb2xlcyI6WyJhZG1pbiJdfQ.gbSoPS3BV6z5ri97R-6_rawYZgnVb3hXu1nnWgFkzy4tzm_0SYdr6M_kNzELm-jAHAD64hb_zY4gfVtflpRO218V5YPA-6OdCO1CnaMZZFYbuFLC2WYn2gmBMwX8QUniX49slq34E3tjkbi7BCJuRKHo4I_TiG2AxKuyvvaaZDs

```

## 业务流程

- 创建 REPAIR_A
- 获取 Repairs 列表
- 查看 REPAIR_A
- 修改 REPAIR_A
- 修改 REPAIR_A 维修记录
- 删除 REPAIR_A
