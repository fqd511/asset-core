## **Controller**

------

### **概述**

负责主要逻辑，向上往`API`层提供直接方法调用，向下直接操作`db`层



### **功能概括**

#### Account

账户的添加（add&init）、修改（update（title、tag））、删除（转为 hidden）、查找（by id、desc）

#### Record

记录的添加（add）、修改（balance、tag、time）、删除（改变状态）、查找（by id、desc）

#### Report

> 注意，报表记录一般为自动根据 record 生成

报表记录的刷新（update）