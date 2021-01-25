import SHOP_DATA from './shop.data'
import { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'


class ShopPage extends Component{
    constructor(props){
        super(props)
        this.state={
            collection : SHOP_DATA

        }
    }
    
    render(){
        return <div>{this.state.collection.map(({id, ...otherCollectionProps})=>
        <CollectionPreview key={id} {...otherCollectionProps}/>
        
        )}</div>
    }



}
export default ShopPage