import { DeliveryClient, DeliveryClientConfig } from 'kentico-cloud-delivery-typescript-sdk';


const projectId = '66ab95de-6599-0018-f141-3c9dc08fe797';
const previewApiKey = "";

const isPreview = () => {
    return previewApiKey !== "";
}

const client = new DeliveryClient(
    new DeliveryClientConfig(projectId, [],
        {
            enablePreviewMode: isPreview(),
            previewApiKey: previewApiKey
        }
    )
)

module.exports = {
    projectId,
    client
}