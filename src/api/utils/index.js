import axios from "axios"

//-----Image uplopd-----
export const imageUpload = async image => {
        //----image---uplode--form---data----
        const formData = new FormData()
        formData.append('image', image)
          // 1. Uplode Image and get image url
          const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMGBB_API_KEY
          }`,
          formData
        )
        return(data.data.display_url)
}