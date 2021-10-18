import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
// import * as actionCreators from './store/actionCreators';
// 不用像上面那么麻烦，直接引入store就直接找到store下面的index
import {actionCreators} from './store';

import { HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button} from './style';


const Header=(props)=>{
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={props.focused?'focused':''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                <i className={props.focused?'focused iconfont':'iconfont'}>&#xe614;</i>
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
       
    


const mapStateToProps=(state)=>{
    return {
        // 把仓库store里的focused映射到props里面
        focused :state.header.get('focused')
    }
}

const mapDispathToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }

}
// 将Header组件和store连接起来，括号里是两种映射
export default connect(mapStateToProps,mapDispathToProps)(Header)
