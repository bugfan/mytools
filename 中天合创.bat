@echo off	
@echo 1、搜索过程中若出现存储空间不足请与信息科联系； 	
@echo 2、出现无法打开的文件请忽略；		
@echo 3、出现本搜索文件名称请忽略，出现其他文件名称核实后彻底删除；		
@echo 4、请等待DOS窗口正常出现
@echo off
set var=c d e f g h i z k l m n o p q r s t u v w x y z
for %%i in (%var%) do (
 if exist %%i: (
dir %%i:/a/s |findstr  "周永康"		
findstr /ms "周永康"   %%i:/*.*  		
dir %%i:/a/s |findstr  "孙政才" 		
findstr /ms "孙政才"   %%i:/*.* 	
dir %%i:/a/s |findstr  "令计划"			
findstr /ms "令计划"   %%i:/*.* 	 		
dir %%i:/a/s |findstr  "薄熙来" 			
findstr /ms "薄熙来"   %%i:/*.*  	
dir %%i:/a/s |findstr  "徐才厚"			
findstr /ms "徐才厚"   %%i:/*.*  			
dir %%i:/a/s |findstr  "郭伯雄" 			
findstr /ms "郭伯雄"   %%i:/*.* 		
dir %%i:/a/s |findstr  "张阳"			
findstr /ms "张阳"   %%i:/*.*  			
dir %%i:/a/s |findstr  "房峰辉" 			
findstr /ms "房峰辉"   %%i:/*.*  	
dir %%i:/a/s |findstr  "杨晶"			
findstr /ms "杨晶"  *.*		  		
dir %%i:/a/s |findstr  "苏荣" 			
findstr /ms "苏荣"   %%i:/*.* 		
dir %%i:/a/s |findstr  "刘铁男"				
findstr /ms "刘铁男"   %%i:/*.* 		 		
dir %%i:/a/s |findstr  "蒋洁敏" 				
findstr /ms "蒋洁敏"   %%i:/*.* 	 	
dir %%i:/a/s |findstr  "杨栋梁"				
findstr /ms "杨栋梁"  *.*	  			
dir %%i:/a/s |findstr  "杨焕宁"	 			
findstr /ms "杨焕宁"   %%i:/*.* 			
dir %%i:/a/s |findstr  "努尔"				
findstr /ms "努尔"   %%i:/*.*  				
dir %%i:/a/s |findstr  "百克力" 				
findstr /ms "百克力"  *.*	 
dir %%i:/a/s |findstr  "陈同海"		
findstr /ms "陈同海"   %%i:/*.*  		
dir %%i:/a/s |findstr  "苏树林" 		
findstr /ms "苏树林"   %%i:/*.* 	
dir %%i:/a/s |findstr  "王天普"			
findstr /ms "王天普"   %%i:/*.* 	 		
dir %%i:/a/s |findstr  "张耀仓" 			
findstr /ms "张耀仓"   %%i:/*.*  	
dir %%i:/a/s |findstr  "蔡希有"			
findstr /ms "蔡希有"   %%i:/*.*  			
dir %%i:/a/s |findstr  "王立新" 			
findstr /ms "王立新"   %%i:/*.* 		
dir %%i:/a/s |findstr  "薛万东"			
findstr /ms "薛万东"   %%i:/*.*  			
dir %%i:/a/s |findstr  "刘清涛" 			
findstr /ms "刘清涛"   %%i:/*.*  	
dir %%i:/a/s |findstr  "周佰修"			
findstr /ms "周佰修"  *.*		  		
dir %%i:/a/s |findstr  "周玉琦" 			
findstr /ms "周玉琦"   %%i:/*.* 		
dir %%i:/a/s |findstr  "耿宪良"				
findstr /ms "耿宪良"   %%i:/*.* 		 		
dir %%i:/a/s |findstr  "纪波" 				
findstr /ms "纪波"   %%i:/*.* 	 	
dir %%i:/a/s |findstr  "李宗禧"				
findstr /ms "李宗禧"  *.*	  			
dir %%i:/a/s |findstr  "白恩培"	 			
findstr /ms "白恩培"   %%i:/*.* 			
dir %%i:/a/s |findstr  "朱明国"				
findstr /ms "朱明国"   %%i:/*.*  				
dir %%i:/a/s |findstr  "周本顺" 				
findstr /ms "周本顺"  *.*	
dir %%i:/a/s |findstr  "王珉"			
findstr /ms "王珉"   %%i:/*.*  			
dir %%i:/a/s |findstr  "黄兴国" 			
findstr /ms "黄兴国"   %%i:/*.* 		
dir %%i:/a/s |findstr  "王三运"			
findstr /ms "王三运"   %%i:/*.*  			
dir %%i:/a/s |findstr  "孟宏伟" 			
findstr /ms "孟宏伟"   %%i:/*.*  	
dir %%i:/a/s |findstr  "赵正永"			
findstr /ms "赵正永"  *.*		  		
dir %%i:/a/s |findstr  "李春城" 			
findstr /ms "李春城"   %%i:/*.* 		
dir %%i:/a/s |findstr  "倪发科"				
findstr /ms "倪发科"   %%i:/*.* 		 		
dir %%i:/a/s |findstr  "郭永祥" 				
findstr /ms "郭永祥"   %%i:/*.* 	 	
dir %%i:/a/s |findstr  "李达球"				
findstr /ms "李达球"  *.*	  			
dir %%i:/a/s |findstr  "季建业"	 			
findstr /ms "季建业"   %%i:/*.* 			
dir %%i:/a/s |findstr  "李东生"				
findstr /ms "李东生"   %%i:/*.*  				
dir %%i:/a/s |findstr  "冀文林" 				
findstr /ms "冀文林"  *.*	
dir %%i:/a/s |findstr  "万庆良"		
findstr /ms "万庆良"   %%i:/*.*  		
dir %%i:/a/s |findstr  "武长顺" 		
findstr /ms "武长顺"   %%i:/*.* 	
dir %%i:/a/s |findstr  "王敏"			
findstr /ms "王敏"   %%i:/*.* 	 		
dir %%i:/a/s |findstr  "杨卫泽" 			
findstr /ms "杨卫泽"   %%i:/*.*  	
dir %%i:/a/s |findstr  "谷春立"			
findstr /ms "谷春立"   %%i:/*.*  			
dir %%i:/a/s |findstr  "卢子跃" 			
findstr /ms "卢子跃"   %%i:/*.* 		
dir %%i:/a/s |findstr  "杨振超"			
findstr /ms "杨振超"   %%i:/*.*  			
dir %%i:/a/s |findstr  "张喜武" 			
findstr /ms "张喜武"   %%i:/*.*  	
dir %%i:/a/s |findstr  "鲁炜"			
findstr /ms "鲁炜"  *.*		  		
)  ) 
@echo 请检查显示的文件，核实是否需要删除，不要关闭本窗口
pause 
pause 
pause 
