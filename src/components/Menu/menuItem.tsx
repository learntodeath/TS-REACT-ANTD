import React, { FC ,useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu';
export interface MenuItemProps{
    index ?: string;
    disabled ?: Boolean;
    className ?: string;
    style ?: React.CSSProperties
}


const MenuItem: FC<MenuItemProps> = (props)=>{
    const { index , className, style, disabled , children} = props
    const content = useContext(MenuContext)
    const classes = classNames('menu-item' , className , {
        'is-disabled' : disabled,
        'is-active' : content.index ===index
    })
   
    const handleClick = () => {
        if(content.onSelect&&!disabled && typeof index ==='string'){
            content.onSelect(index)
        }
      }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem