Component({
  properties: {
    size:String,
    color:String,
    type:String,
  },
  data: {
    path:"assets/icons/",//配置项目中svg的图标所在路径，如"path/to/icons/"
    src:"",
    reg:""
  },
  methods: {
    // 将svg转为url格式
    svgToUrl(svg){
      let txt = svg.replace('<svg',(~svg.indexOf('xmlns')?'<svg':'<svg xmlns="http://www.w3.org/2000/svg"'))
      .replace(/"/g, '\'')
      .replace(/%/g, '%25')
      .replace(/#/g, '%23')       
      .replace(/{/g, '%7B')
      .replace(/}/g, '%7D')         
      .replace(/</g, '%3C')
      .replace(/>/g, '%3E')
      .replace(/\s+/g,' ')
      return 'url(\"data:image/svg+xml,'+txt+'\")'
    }
  },
  lifetimes:{
    attached:function(){
      //若color和size属性不设置，默认设置颜色和大小
      if(this.data.color==""){
        this.setData({
          color:"#ccc"
        })
      }
      if(this.data.size==""){
        this.setData({
          size:"1em"
        })
      }
      //读取svg所在路径
      const fs = wx.getFileSystemManager()
      let res = fs.readFileSync(this.data.path+this.data.type+'.svg','ascii')
      this.setData({
        src:this.svgToUrl(res.replace("stroke=\"currentColor\"","stroke=\""+this.data.color+"\""))//设置svg颜色后转url格式
      })
    },
  }
})
