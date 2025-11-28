# Admin Dashboard Guide

## Accessing the Admin Panel

1. Navigate to: `https://your-portfolio-url.vercel.app/admin`
2. Enter the admin password: `omar2025` (change this in `app/admin/page.tsx`)

## Features

### Project Management
- **Add New Project**: Click "+ Add New Project" button
- **Edit Project**: Click "Edit" on any project card
- **Delete Project**: Click "Delete" and confirm

### Project Fields
- **Title**: Display name of the project
- **Slug**: URL-friendly identifier (e.g., "my-project")
- **Description**: Detailed project description
- **Technologies**: Comma-separated list (e.g., "Next.js, TypeScript, Tailwind CSS")
- **GitHub URL**: Link to GitHub repository
- **Live URL**: (Optional) Link to deployed project
- **Highlight**: One-line project highlight
- **Role**: (Optional) Your role (e.g., "Solo Project", "Lead Developer")

## Security Notes

### Changing the Password

Edit `app/admin/page.tsx`, line 23:
```typescript
const ADMIN_PASSWORD = "your-new-secure-password";
```

### Production Security Recommendations

For production use, consider:
1. **Environment Variables**: Store password in `.env.local`
2. **NextAuth.js**: Implement proper authentication
3. **Session Management**: Use JWT tokens
4. **Rate Limiting**: Prevent brute-force attacks
5. **Database**: Consider using a database instead of file-based storage

## How It Works

1. **Login**: Simple password check (client-side for demo)
2. **Data Storage**: Projects are stored in `data/projects.ts`
3. **API Routes**: CRUD operations via `/api/projects`
4. **File Updates**: API automatically updates the TypeScript file

## Local Development

```bash
# Run development server
npm run dev

# Access admin at
http://localhost:3000/admin
```

## Deployment

When you push changes to GitHub, Vercel will automatically deploy the admin panel.

**Important**: Make sure to change the default password before deploying!

## Troubleshooting

### "Failed to load projects"
- Check that `data/projects.ts` exists
- Verify file permissions

### Changes not reflecting
- Clear browser cache
- Wait for Vercel deployment to complete
- Check browser console for errors

### Cannot save projects
- Check browser console for API errors
- Verify you're logged in
- Ensure all required fields are filled

## Future Enhancements

Consider adding:
- Image upload for project thumbnails
- About section editor
- Contact information manager
- Analytics dashboard
- Blog post management
- SEO metadata editor
