export default (graphQLProducts) => {
  if (!graphQLProducts) {
    return null
  }

  return graphQLProducts?.products?.edges?.map((productEdge) => {
    const product = { ...productEdge.node }
    product.variants = product.variants?.edges?.map((variantEdge) => variantEdge.node)
    return product
  })
}
