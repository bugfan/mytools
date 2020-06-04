### 最近用xorm链接sqlite发现xorm那个sync2的时候会报这么一串
```
Unknown col \"version\" in index \"unique_schema_migrations\" of table schema_migrations, columns [version]
```
### 原因是这个ｄｂ其他程序链接时已经限制了版本信息和xorm里面生成的ｓｑｌ有冲突
### 最后果断改成了go标准库链接
```
if sqliteSession != nil {
		rows, err := sqliteSession.Query(fmt.Sprintf(`select encrypted_password from users where username='%s'`, username))
		if err != nil {
			return err
		}
		defer rows.Close()
		for rows.Next() {
			var pwd interface{}
			err := rows.Scan(&pwd)
			if err != nil {
				return err
			}
			user.EncryptedPassword = to.String(pwd)
		}
	}
```
