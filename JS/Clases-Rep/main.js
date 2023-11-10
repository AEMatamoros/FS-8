
class ImageGallery {
    apiUrl
    imageContainer
    #imageContainerElement
    params
    constructor({ imageContainer, apiUrl, params }) {
        this.imageContainer = imageContainer
        this.#imageContainerElement = document.getElementById(this.imageContainer);
        this.params = params
        this.apiUrl = apiUrl
    }

    async fetchImages() {
        try {
            const response = await fetch(this.apiUrl + "?" + new URLSearchParams(
                this.params
            ));
            const images = await response.json();
            this.renderImages(images);
        } catch (error) {
            console.log('Error fetching images:', error);
        }
    }

    renderImages(images) {
        console.log(images)
        images.forEach((image) => {
            const imageItem = document.createElement('div');
            imageItem.classList.add('image-item');

            const img = document.createElement('img');
            img.src = image.download_url;

            imageItem.appendChild(img);
            this.#imageContainerElement.appendChild(imageItem);
        });
    }

    getImageContainer() {
        return this.imageContainer;
    }
    setImageContainer(imageContainer) {
        this.imageContainer = imageContainer;
    }
    getApiUrl() {
        return this.apiUrl;
    }
    setApiUrl(url) {
        this.url = url;
    }

    getParams() {
        return this.params
    }

    setParams(params) {
        this.params = { ...params };
    }

    addClass(className) {
        this.#imageContainerElement.classList.add(className);
    }

    removeClass(className) {
        this.#imageContainerElement.classList.remove(className);
    }

    hasClass(className) {
        return this.#imageContainerElement.classList.contains(className);
    }

    setStyle(property, value) {
        this.#imageContainerElement.style[property] = value;
    }

    removeStyle(property) {
        this.#imageContainerElement.style[property] = '';
    }
}

const gallery = new ImageGallery({
    imageContainer: 'image-container', apiUrl: "https://picsum.photos/v2/list?", params: { page: 1, limit: 10 }
});

gallery.fetchImages();
gallery.setParams({ page: 3, limit: 20 })

setTimeout(() => { gallery.fetchImages(); }, 3000)


