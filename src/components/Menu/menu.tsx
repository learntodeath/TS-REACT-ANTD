import React, { FC , createContext ,useState} from 'react';
import classNames from 'classnames'
import {MenuItemProps} from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex:string) => void
export interface MenuProps {
    defaultIndex ?: string;
    className ?: string,
    disabled ?: Boolean,
    mode ?: MenuMode,
    style ?: React.CSSProperties,
    onSelect ?: SelectCallback
}
interface IMenuContext {
    index : string;
    onSelect ?: SelectCallback
}
export const MenuContext = createContext<IMenuContext>({index :'0'})
const Menu:FC<MenuProps> =(props)=>{
    const {children,style,className,defaultIndex,mode,onSelect} = props
    const [currentActive , setActive] = useState(defaultIndex)
    const classes = classNames('viking-menu',className,{
        'menu-vertical':mode === 'vertical'
    })
    const handleClick =(index:string)=>{
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passesContext: IMenuContext = {
        index: currentActive ? currentActive :'0',
        onSelect: handleClick
    }
    const renderChild =()=>{
      return  React.Children.map(children , (item,index)=>{
            const childElement = item as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if(displayName === 'MenuItem'){
                return React.cloneElement(childElement,{
                    index:index.toString()
                })
            }else{
                console.error('Warning: Menu hs a child which is not a MenuItem component')
            }
        })
    } 
    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passesContext}>
                {renderChild()}
            </MenuContext.Provider>
            
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
}
export default Menu