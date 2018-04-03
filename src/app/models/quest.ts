import { ContentItem, Fields, IContentItem } from 'kentico-cloud-delivery-typescript-sdk/_bundles';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' module.
 * You can substitute instances of 'IContentItem' with a model defined in other class
 * to get access to all properties. This is applicable only if you know what item type the field contains.
 */
export class Quest extends ContentItem {
    public poiGroupPointsOfInterest: IContentItem[];
    public logo: Fields.AssetsField;
    public instructions: Fields.RichTextField;
    public urlSlug: Fields.UrlSlugField;
    public poiGroupTitle: Fields.TextField;

    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {

                if (fieldName === 'poi_group__points_of_interest') {
                    return 'poiGroupPointsOfInterest';
                }

                if (fieldName === 'url_slug') {
                    return 'urlSlug';
                }

                if (fieldName === 'poi_group__title') {
                    return 'poiGroupTitle';
                }

                return fieldName;
            })
        });
    }
}
