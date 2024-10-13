// Define your avatar images array
const avatarImages = [
  'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st%3D1728661203~exp%3D1728661803~hmac%3D21947b82596ca62d6f6d4e10b10d32a4364a8315577389f6a1685f8ccec79854',
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=1380&t=st%3D1728661238~exp%3D1728661838~hmac%3Dd15019322c31edac1f20fb6a33e39e4506919cd531626697c89ca327fad4baea',
  'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?w=1380&t=st%3D1728661256~exp%3D1728661856~hmac%3Daf8782be55f0d5ee195d9876a29f34f8af71b3a5325e6e1ff221db23ee2a64e1',
  'https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?w=1380&t=st%3D1728661273~exp%3D1728661873~hmac%3D6ebae77e98b2b59141d73766f817ca4aab08c5e9b94ee7adae77fda6752097ac',
  'https://img.freepik.com/premium-photo/man-with-beard-glasses-is-wearing-jacket-that-says-hes-wearing-jacket_113255-93084.jpg?w=1380'
];

// Hash function to generate a consistent hash for a given string
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// Function to assign an avatar based on email
export function assignAvatarBasedOnEmail(email) {
  const hash = hashString(email);
  const index = Math.abs(hash) % avatarImages.length; // Ensure the index is within the bounds of the array
  return avatarImages[index];
}

// Function to get the default avatar for a user based on email, with localStorage caching
function getDefaultAvatar(email) {
  let defaultAvatar = localStorage.getItem(`defaultAvatar_${email}`);
  
  if (!defaultAvatar) {
    defaultAvatar = assignAvatarBasedOnEmail(email);
    localStorage.setItem(`defaultAvatar_${email}`, defaultAvatar);
  }

  return defaultAvatar;
}

// Function to assign random avatar to the default user logo
function assignRandomAvatarToDefault() {
  const userEmail = localStorage.getItem('userEmail'); // Fetch email from localStorage
  if (userEmail) {
    return getDefaultAvatar(userEmail); // Use the captured email to get the avatar
  }
  return avatarImages[0]; // Default avatar if no email is found
}

// Export the configData object
const configData = {
  "DASHBOARD_URL": "/dashboard/app",
  "DASHBOARD_HOME_URL": "/dashboard",
  "LOGIN_URL": "/",
  "REGISTER_URL": "/register",
  "USER_GROUPS_URL": "/dashboard/groups",
  "VIEW_GROUP_ROUTER_URL": "/dashboard/groups/view/:groupId",
  "VIEW_GROUP_URL": "/dashboard/groups/view/",
  "EDIT_GROUP_URL": "/dashboard/groups/edit/",
  "EDIT_GROUP_ROUTER_URL": "/dashboard/groups/edit/:groupId",
  "ADD_EXPENSE_URL": "/dashboard/addExpense/",
  "ADD_EXPENSE_ROUTER_URL": "/dashboard/addExpense/:groupId",
  "EDIT_EXPENSE_URL": "/dashboard/editExpense/",
  "EDIT_EXPENSE_ROUTER_URL": "/dashboard/editExpense/:expenseId",
  "VIEW_EXPENSE_URL": "/dashboard/viewExpense/",
  "VIEW_EXPENSE_ROUTER_URL": "/dashboard/viewExpense/:expenseId",
  "CREATE_GROUP_URL": "/dashboard/crateGroup",
  "USER_PROFILE_URL": "/dashboard/userProfile",
  "USER_DELETED_URL": "/userProfile/confirmDelete",
  "USER_PASS_UPDATE_URL": "/dashboard/userProfile/updatePassword",

  // Dynamically assign the default user logo URL
  "USER_DEFAULT_LOGO_URL": assignRandomAvatarToDefault()
};

export default configData;
