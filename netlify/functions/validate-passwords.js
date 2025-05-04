// netlify/functions/validate-password.js
exports.handler = async function(event) {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  
    try {
      const { password } = JSON.parse(event.body);
      
      // Get passwords from environment variables
      const validPasswords = [
        { 
          code: process.env.PASSWORD_1, 
          expiration: process.env.EXPIRY_1,
          notes: process.env.NOTES_1
        },
        { 
          code: process.env.PASSWORD_2, 
          expiration: process.env.EXPIRY_2,
          notes: process.env.NOTES_2
        },
        { 
          code: process.env.PASSWORD_3, 
          expiration: process.env.EXPIRY_3,
          notes: process.env.NOTES_3
        },
        { 
          code: process.env.PASSWORD_4, 
          expiration: process.env.EXPIRY_4,
          notes: process.env.NOTES_4
        }
      ].filter(p => p.code); // Only keep passwords that are defined
      
      // Find matching password
      const passwordInfo = validPasswords.find(p => p.code === password);
      
      if (!passwordInfo) {
        return {
          statusCode: 401,
          body: JSON.stringify({ valid: false, message: "Invalid access code" })
        };
      }
      
      // Check expiration
      const expirationDate = new Date(passwordInfo.expiration);
      const currentDate = new Date();
      
      if (currentDate > expirationDate) {
        return {
          statusCode: 401,
          body: JSON.stringify({ valid: false, message: "This access code has expired" })
        };
      }
      
      // Valid password
      return {
        statusCode: 200,
        body: JSON.stringify({ valid: true })
      };
    } catch (error) {
      console.error('Error validating password:', error);
      return { 
        statusCode: 500, 
        body: JSON.stringify({ valid: false, message: "Server error" }) 
      };
    }
  }