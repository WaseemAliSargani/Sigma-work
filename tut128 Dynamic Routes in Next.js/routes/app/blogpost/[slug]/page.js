export default function Page({ params}) {
    // throw new Error("error hai")  //here you can create custom Erros and give then styles

    /// fetch your "blog"  post by its slug
    let languages = ["Python", "javascript", "java", "cpp", "csharp"]
    if(languages.includes(params.slug)){
        return <div> My Post: {params.slug} </div>
    }
    else{
        return <div> Post not found </div>
    }
    return <div> My Post: {params.slug}</div>
}