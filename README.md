# Curriculum
My Professional Profile

# Password-Protected CV Website

A professional CV website with password protection for controlled access to recruiters.

## Overview

This repository contains a single-page application that displays a professional CV. The CV is protected by an access code system, where only people with valid (non-expired) access codes can view the content.

## Features

- **Password Protection**: Only users with valid access codes can view the CV
- **Expiration System**: Each access code has a configurable expiration date
- **Responsive Design**: Works well on desktop and mobile devices
- **Modern Layout**: Professional design highlighting skills and experience
- **Easy Maintenance**: Simple JSON file to manage access codes

## How to Deploy

1. Fork this repository
2. Enable GitHub Pages in your repository settings (Settings > Pages)
3. Select the main branch as the source
4. Your CV will be available at `https://[your-username].github.io/[repository-name]/`

## How to Manage Access Codes

All access codes are stored in the `passwords.json` file. To add, modify, or remove access codes:

1. Edit the `passwords.json` file
2. Each access code should follow this format:
```json
{
  "code": "unique-access-code",
  "expiration": "YYYY-MM-DDThh:mm:ssZ",
  "notes": "Description of who this code is for"
}
```
3. Commit and push your changes to update the access codes

### Access Code Format

- **code**: The actual password that will be entered by the user
- **expiration**: The date and time when the code will expire (ISO 8601 format)
- **notes**: Optional field to keep track of who the code was provided to

## Customization

To update your CV content:

1. Edit the HTML content in `index.html`
2. Modify the styling in the CSS section if needed
3. Update your personal information, skills, and experience

## Security Note

This implementation uses client-side validation, which means the passwords are stored in a file that is accessible to users who know where to look. This approach is suitable for basic access control but should not be used for highly sensitive information.

For enhanced security, consider implementing a server-side validation approach using services like Firebase Authentication or a custom backend.

## License

[MIT License](LICENSE)
