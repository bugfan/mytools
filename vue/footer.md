##  vue增加footer

### 找到layout.vue文件（优先），或者app.vue,在里面引入footer.vue代码如下
```
<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, AppFooter } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { getToken } from '@/utils/auth'
import { eventType } from '@/utils/event'
// import Runtime from '@/runtime.js'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    AppFooter
  },
```
### 在合适的位置加入footer.vue代码，里面写上你要显示的内容
```
<template>
  <div class="my-footer">
    <center class="my-font my-margin">{{getName()}}</center>
    <center class="my-font my-margin my-bottom">{{getOther()}}</center>
  </div>
</template>

<script>
import api from '@/api/system'

export default {
  name: 'Footer',
  data() {
    return {
      licenseData: {},
      licenseOK: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    getName() {
      // let ver = 'v' + this.licenseData.Feature
      // if (!ver) {
      //   ver = ''
      // }
      // return 'test ' + ver
      return 'test  v2.0'
    },
    getOther() {
      if (!this.licenseData.ExpAt || this.licenseData.ExpAt === '') {
        return '暂无授权'
      }
      let ver = this.licenseData.Feature
      if (!ver) {
        ver = ''
      }
      let exp = '有效期:' + this.licenseData.ExpAt.slice(0, 10)
      if (!exp) {
        exp = ''
      }
      return ver + ' ' + exp
    },
    fetchData() {
      // get from local path
      api.getLicenseKey().then(res => {
        if (res.status === 200) {
          this.licenseData = res.data
          this.licenseOK = true
        } else {
          this.licenseOK = false
        }
      })
    }
  }
}
</script>

<style>
.my-font{
  color:#a6a6a6;
  font-size:14px;
}
 .my-margin{
   margin-top:10px;
 }
 .my-bottom{
   margin-bottom:10px;
 }
 .my-footer{
   
 }
</style>

```
