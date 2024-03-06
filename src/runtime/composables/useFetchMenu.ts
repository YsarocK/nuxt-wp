interface Menu {
  url: string,
  title: {
    rendered: string
  }
}

const useFetchMenu = async (menu: number): Promise<Menu> => {
  const { data, error } = await useAsyncData<Array<Object>>(`menu-${menu}`, async () => {
    const { API_URL, APPLICATION_PASSWORD } = useRuntimeConfig().public
    return $fetch(`${API_URL}/menu-items?menus=${menu}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from('admin' + ":" + APPLICATION_PASSWORD).toString('base64')}`
      }
    })
  })

  // @ts-ignore
  return data.value as Array<Menu>
}

export default useFetchMenu
