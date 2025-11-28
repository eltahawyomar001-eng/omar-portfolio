# Admin Dashboard Guide

## Accessing the Admin Panel

1. Navigate to: `https://your-portfolio-url.vercel.app/admin`
2. Enter your admin password (stored in environment variables)

## Initial Setup

### Local Development

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and set your password:
   ```
   NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password-here
   ```

3. **IMPORTANT**: Never commit `.env.local` to git (it's already in .gitignore)

### Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `NEXT_PUBLIC_ADMIN_PASSWORD`
   - **Value**: Your secure password (e.g., `34023012563Meer@`)
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your site for changes to take effect

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

### Environment Variables (Current Implementation)

The password is now stored in `.env.local` file and Vercel environment variables:
- **Local**: `.env.local` (not committed to git)
- **Production**: Vercel Environment Variables

### Important Security Considerations

⚠️ **Current Limitation**: The password is checked on the client-side, which means it's visible in the browser's JavaScript. This is **NOT production-grade security**.

### Upgrading to Production-Ready Authentication

For a real production application, implement proper authentication:

1. **NextAuth.js** (Recommended)
   ```bash
   npm install next-auth
   ```
   - Supports OAuth (Google, GitHub, etc.)
   - Secure session management
   - Server-side authentication

2. **Auth0** or **Clerk**
   - Managed authentication services
   - Enterprise-grade security
   - Easy integration

3. **Custom JWT Authentication**
   - Server-side token validation
   - Secure password hashing (bcrypt)
   - HTTP-only cookies

### Best Practices

1. ✅ Never commit `.env.local` to git
2. ✅ Use environment variables for secrets
3. ✅ Use different passwords for development and production
4. ❌ Don't share your `.env.local` file
5. ❌ Don't expose passwords in client-side code (for production apps)

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
