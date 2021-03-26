export interface WorksI {
  id : number,
  title: string,
  previewInfo: string,
  info ?: string,
  repository1?: string,
  repository2? :string,
  repository3? : string,
  url? : string,
  imgs? : [
    img1?: string,
    img2?: string,
    img3?: string,
    img4?: string,
  ]
}
