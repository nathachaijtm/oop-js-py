class SocialMedia {
    constructor(name) {
        this.name = name;
        this.features = [];
    }

    getDescription() {
        return `${this.name} with features: ${this.features.join(", ")}`;
    }
}

// Decorator functions
function addMessaging(socialMedia) {
    socialMedia.features.push("Messaging");
    socialMedia.sendMessage = function (message) {
        return `Sending message: "${message}"`;
    };
    return socialMedia;
}

function addVideoCall(socialMedia) {
    socialMedia.features.push("Video Calling");
    socialMedia.startVideoCall = function () {
        return "Starting a video call";
    };
    return socialMedia;
}

function addStorySharing(socialMedia) {
    socialMedia.features.push("Story Sharing");
    socialMedia.shareStory = function (story) {
        return `Sharing story: "${story}"`;
    };
    return socialMedia;
}

// Example
let facebook = new SocialMedia("Facebook");
facebook = addMessaging(facebook);
facebook = addVideoCall(facebook);

let instagram = new SocialMedia("Instagram");
instagram = addStorySharing(instagram);

console.log(facebook.getDescription()); 
// Output: Facebook with features: Messaging, Video Calling
console.log(facebook.sendMessage("Hi there!")); 
// Output: Sending message: "Hi there!"
console.log(facebook.startVideoCall()); 
// Output: Starting a video call

console.log(instagram.getDescription());
// Output: Instagram with features: Story Sharing
console.log(instagram.shareStory("Look at my breakfast!")); 
// Output: Sharing story: "Look at my breakfast!"