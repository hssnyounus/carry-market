// import React,{Component, useContext} from 'react';
// import { connect } from 'react-redux';
// import { ListAllSellerProducts } from '../../actions';
// import {Context, Provider } from '../../context/AllSellerProductContext';

// class Allproducts extends Component {
//     static contextType  = Context;
//     constructor(props) {
//         super(props);
//         this.state = {  }
//         // const prodt =  this.props;
//         console.log(props.match.params.catalogueslug,'prop');
//     }
//     componentDidMount(){
        
//         // const { state: { allsellerproducts }, ProductbySellerCatalogSlug } = useContext(Context);
//         const slugCategory = this.context;
//         console.log(slugCategory,'slugCategory');
//         console.log(this.props);
//     //    this.props.ListAllSellerProducts();
//     //    this.props.ProductbySellerCatalogSlug();
//     }
//     render() { 
//         return ( 
//             <div>
//                 allProduct
//             </div>

//          );
//     }
// }
 
// const mapStateToProps = (state)=>{
//     console.log(state);

//     return{

//         SellerProducts:state.SellerProductReducer.SellerProductReducer,

//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch);
//     return{

//         ListAllSellerProducts:()=>{
//             dispatch(ListAllSellerProducts())
//         },


//     }
// }

// // export default connect(mapStateToProps,mapDispatchToProps)(Allproducts);
// export default () =>{
//     return( 
//     <Provider>
//          <Allproducts />
         
//      </Provider>
//      )
//  }