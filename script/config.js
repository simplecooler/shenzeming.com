requirejs.config({
    baseUrl: 'script/lib',
    paths: {
    	jquery: 'jquery',
        underscore: 'underscore'
    },
    packages: [
        {
            name: 'echarts',
            location: 'echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: 'zrender/src',
            main: 'zrender'
        }
    ]
});