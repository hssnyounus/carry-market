import React from 'react'

function OneSellerProduct(props) {
    const id = props.match.params.slug;
    console.log(props,'sss');
    return (
        <div>One{id}</div>
    )
}

export default OneSellerProduct
