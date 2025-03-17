const API_BASE_URL = "http://localhost:3000";
export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (userData: { username: string; password: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};