<template>
  <div>
    <div class="dynamic">
      <p>动态组件基础</p>
      <button 
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab">
        {{ tab }}
      </button>
      <component :is="currentTabComponent" class="tab"></component>
    </div>

    <div class="dynamic">
      <p>动态组件 进阶</p>
      <button 
        v-for="tab in advancedTabs"
        :key="tab"
        :class="['tab-button', { active: currentAvacnedTab === tab }]"
        @click="currentAvacnedTab = tab">
        {{ tab }}
      </button>
      <keep-alive>
        <component :is="currentAvacnedTab" class="tab"></component>
      </keep-alive>
    </div>

  </div>
</template>

<script>
import Archive from './Archive'
import Post from './Post'
import AdvancedPost from './AdvancedPost'
import AdvancedArchive from './AdvancedArchive'

export default {
  components: {
    Archive,
    Post,
    AdvancedPost,
    AdvancedArchive
  },
  data () {
    return {
      currentTab: 'Archive',
      tabs: ['Archive', 'Post'],
      currentAvacnedTab: 'AdvancedPost',
      advancedTabs: ['AdvancedArchive', 'AdvancedPost']
    }
  },
  computed: {
    currentTabComponent () {
      return this.currentTab
    },
    currentAdvancedTabComponent () {
      return this.currentAvacnedTab
    }
  },
  created () {
    console.log('parent')
  }
}
</script>

<style lang="scss">
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
