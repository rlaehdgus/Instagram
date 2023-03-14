module.exports = {
    outputDir: "../../src/main/resources/static/vue",                // outputDir은 npm run build로 빌드 시 파일이 생성되는 위치
    devServer: {
        proxy: {
			"/api": {
				// "/api"로 들어오면 포트 8081(스프링 서버)로 보낸다.
				target: "http://localhost:8081",
				changeOrigin: true,  // cross origin 허용
                pathRewrite : {
                    '^/api' : ''
                }
			}
		}
    },
    chainWebpack: config => {  
        const svgRule = config.module.rule("svg");    
        svgRule.uses.clear();    
        svgRule.use("vue-svg-loader").loader("vue-svg-loader");  
    }
};