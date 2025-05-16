export default class BannerModel {
    id;
    impact;
    title;
    subtitle;
    image;
    alt;

    constructor({id, impact, title, subtitle, image, alt}) {
        this.id = id;
        this.impact = impact;
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.alt = alt;
    }
}