import React, { Component } from 'react'
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
// import * as actionCreators from './store/actionCreators';
// 不用像上面那么麻烦，直接引入store就直接找到store下面的index
import {actionCreators} from './store';

import { HeaderWrapper,
        Logo,
        Nav,
        NavItem,
        SearchWrapper,
        NavSearch,
        SearchInfo,
        SearchInfoTitle,
        SearchInfoSwitch,
        SearchInfoList,
        SearchInfoItem,
        Addition,
        Button
} from './style';

class Header extends Component {
    getListArea(){
        const {focused,list}=this.props;
        if (focused) {
            return(
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item)=>{
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>  
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    render() {
        const{focused,handleInputFocus,handleInputBlur}=this.props;
        return (
            <HeaderWrapper>
            <Logo href='/'/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={focused?'focused':''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={focused?'focused iconfont':'iconfont'}>&#xe614;</i>
                    {this.getListArea()}
                </SearchWrapper>
                
            </Nav>
            <Addition>
                    <Button className='writing'>
                    <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className='reg'>注册</Button>
            </Addition>
                
            
        </HeaderWrapper>
        )
    }
}

const mapStateToprops=(state)=>{
    return {
        // 把仓库store里的focused映射到this.props里面
        // focused :state.get('header').get('focused')
        focused :state.getIn(['header','focused']) , //两种都可以
        list :state.getIn(['header','list'])

    }
}

const mapDispathToprops=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }

}
// 将Header组件和store连接起来，括号里是两种映射
export default connect(mapStateToprops,mapDispathToprops)(Header)
