var ImgFigure = React.createClass({
    clickHander: function(){
        if(this.props.info.isCenter){
            console.log("翻转");
        }else{
            this.props.center();
        }
    },
    render: function(){
        var styleObj = {
            top: this.props.info.pos.y,
            left: this.props.info.pos.x,
            transform: "rotate("+ this.props.info.rotate +"deg)"
        };
        return (
            <figure className="img-figure" style={styleObj} onClick={this.clickHander}>
                <img src={"img/" + this.props.data.fileName} alt=""/>
                <figcaption>
                    <h2>{this.props.data.title}</h2>
                    <div></div>
                </figcaption>
            </figure>
        );
    }
});
var Controller = React.createClass({
    render: function(){
        return (
            <div></div>
        );
    }
});
var Photowall = React.createClass({
    getInitialState: function(){
        return {
            imgInfoArr : [
                {
                    pos : {
                        x: 0,
                        y: 0
                    },
                    rotate : 0,
                    isCenter: false
                }
            ]
        };
    },
    Const: {
        centerPos : {
            x:0,
            y:0
        },
        leftXMin : 0,
        leftXMax : 0,
        rightXMin : 0,
        rightXMax : 0,
        yMin : 0,
        yMax : 0
    },
    componentDidMount: function(){
        //获取真实dom，计算宽高
        var stageDOM = this.refs.stage,
            wStageDOM = stageDOM.clientWidth,
            hStageDOM = stageDOM.clientHeight,
            wHalfStageDOM = wStageDOM / 2,
            hHalfStageDOM = hStageDOM / 2;
        var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgfigure),
            wImgFigureDOM = imgFigureDOM.clientWidth,
            hImgFigureDOM = imgFigureDOM.clientHeight,
            wHalfImgFigureDOM = wImgFigureDOM / 2,
            hHalfImgFigureDOM = hImgFigureDOM / 2;

        this.Const.centerPos = {
            x : wHalfStageDOM - wHalfImgFigureDOM,
            y : hHalfStageDOM - hHalfImgFigureDOM
        };
        this.Const.leftXMin = -wHalfImgFigureDOM;
        this.Const.leftXMax = wHalfStageDOM - wHalfImgFigureDOM * 3;
        this.Const.rightXMin = wHalfStageDOM + wHalfImgFigureDOM;
        this.Const.rightXMax = wStageDOM - wHalfImgFigureDOM;
        this.Const.yMin = -hHalfImgFigureDOM;
        this.Const.yMax = hStageDOM - hHalfImgFigureDOM;
        this.rearrage(0);
    },
    rearrage : function(centerIdx){
        var imgInfoArr = this.state.imgInfoArr;
        //给16个图片组件进行pos的赋值
        for(var i=0; i<imgInfoArr.length; i++){
            if(i < imgInfoArr.length / 2){
                imgInfoArr[i].pos = {
                    x : getRangeRandom(this.Const.leftXMin, this.Const.leftXMax),
                    y: getRangeRandom(this.Const.yMin, this.Const.yMax)
                };
            }else{
                imgInfoArr[i].pos = {
                    x : getRangeRandom(this.Const.rightXMin, this.Const.rightXMax),
                    y: getRangeRandom(this.Const.yMin, this.Const.yMax)
                };
            }
            imgInfoArr[i].rotate = getRangeRandom(-30, 30);
            imgInfoArr[i].isCenter = false;
        }
        imgInfoArr[centerIdx].pos = this.Const.centerPos;
        imgInfoArr[centerIdx].rotate = 0;
        imgInfoArr[centerIdx].isCenter = true;

        this.setState({
            imgInfoArr: imgInfoArr
        });
    },
    center: function(centerIdx){
        //利用闭包
        return (function(idx){
            this.rearrage(idx);
        }).bind(this, centerIdx);
    },
    render: function(){
        var imgFigureArr = [];
        var controllerArr = [];
        for(var i=0; i<imgDatas.length; i++){
            //给state里面的imgInfoArr赋值
            if(!this.state.imgInfoArr[i]){
                this.state.imgInfoArr[i] = {
                    pos : {
                        x: 0,
                        y: 0
                    },
                    rotate : 0,
                    isCenter: false
                };
            }
            imgFigureArr.push(<ImgFigure key={i} data={imgDatas[i]}
                ref="imgfigure" info={this.state.imgInfoArr[i]} center={this.center(i)}/>);
            controllerArr.push(<Controller key={i}/>);
        }
        return (
            <section className="stage" ref="stage">
                <section>
                    {imgFigureArr}
                </section>
                <nav>
                    {controllerArr}
                </nav>
            </section>
        );
    }
});

ReactDOM.render(
    <Photowall/>,
    document.getElementById("photowall")
);


function getRangeRandom(low, high){
    return Math.random() * (high - low) + low;
    // 1~10   Math.random() * (10-1) + 1
    // 10~100 Math.random() * (100-10) + 10
}




















