const useWpSeo = (page: any) => {
  const yoast = page?.yoast_head_json
  return {
    seoTitle: yoast?.title || '',
    metaDescription: yoast?.description || '',
    focusKeyphrase: page?.meta?._yoast_wpseo_focuskw || '',
  }
}

export default useWpSeo
