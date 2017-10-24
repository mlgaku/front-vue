<script>
export default {}
</script>

<template>
    <md-whiteframe md-elevation="2">
        <md-list class="custom-list md-triple-line">
            <md-list-item>
                <md-avatar>
                    <img src="https://placeimg.com/40/40/people/1" alt="People">
                </md-avatar>

                <div class="md-list-text-container">
                    <span>知乎技术团队遇到的技术挑战能和 Quora 团队的相比吗？</span>
                    <p>Python  •  webpy  •  50 分钟前  •  最后回复来自 Vladimir</p>
                </div>

                <md-button class="md-icon-button">13</md-button>

                <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
                <md-avatar>
                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                </md-avatar>

                <div class="md-list-text-container">
                    <span>Linux 系统有没有办法让 terminal 走 SS？</span>
                    <p>Linux  •  ssshooter  •  1 小时 11 分钟前  •  最后回复来自 lxml</p>
                </div>

                <md-button class="md-icon-button">31</md-button>

                <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
                <md-avatar>
                    <img src="https://placeimg.com/40/40/people/5" alt="People">
                </md-avatar>

                <div class="md-list-text-container">
                    <span>没什么比周六上班更令人痴迷的了，如果有，那就是周日上班</span>
                    <p>程序员  •  jatai  •  1 小时 14 分钟前  •  最后回复来自 scnace</p>
                </div>

                <md-button class="md-icon-button">23</md-button>

                <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
                <md-avatar>
                    <img src="https://placeimg.com/40/40/people/8" alt="People">
                </md-avatar>

                <div class="md-list-text-container">
                    <span>无奈,感慨一下,中国程序员的普遍平均网络知识(技能)可能在世界前列</span>
                    <p>程序员  •  neilp  •  1 小时 14 分钟前  •  最后回复来自 ccsexyz</p>
                </div>

                <md-button class="md-icon-button">41</md-button>

                <md-divider class="md-inset"></md-divider>
            </md-list-item>
        </md-list>
    </md-whiteframe>
</template>

<style scoped>
.md-whiteframe {
    width: 100%;
    margin: 20px 0;
}
.md-icon-button {
    padding: 0;
    height: 20px;
    color: white;
    font-size: 12px;
    min-width: auto;
    min-height: auto;
    background: #a7a7a7;
    border-radius: 100px;
    line-height: normal;
}
.md-icon-button:hover {
    background: #928f8f !important;
}
.md-list-text-container p {
    margin-top: 10px;
}
</style>