const avatarImages = [
  "https://example.com/avatar1.png",
  "https://example.com/avatar2.png",
  "https://example.com/avatar3.png",
  "https://example.com/avatar4.png",
  "https://example.com/avatar5.png",
];

export default function assignRandomAvatarToDefault() {
  let defaultAvatar = localStorage.getItem("defaultAvatar");

  if (!defaultAvatar) {
    const randomIndex = Math.floor(Math.random() * avatarImages.length); // Generate random index
    defaultAvatar = avatarImages[randomIndex]; // Pick a random avatar
    localStorage.setItem("defaultAvatar", defaultAvatar); // Store in localStorage for consistency
  }

  return defaultAvatar;
}