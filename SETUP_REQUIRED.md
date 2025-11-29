# ⚠️ IMPORTANT: Vercel Environment Variable Setup Required

## Your admin panel won't work until you complete this step!

After the deployment completes, you MUST add the admin password as an environment variable in Vercel:

### Quick Setup (5 minutes)

1. **Go to**: https://vercel.com/eltahawyomar001-eng/omar-portfolio/settings/environment-variables

2. **Click**: "Add New" button

3. **Enter**:
   - Variable Name: `NEXT_PUBLIC_ADMIN_PASSWORD`
   - Value: `34023012563Meer@`
   - Select: ✅ Production ✅ Preview ✅ Development

4. **Click**: "Save"

5. **Redeploy**:
   - Go to: https://vercel.com/eltahawyomar001-eng/omar-portfolio
   - Click on latest deployment
   - Click "..." menu → "Redeploy"

### After Setup

Your admin panel will be ready at:
- https://your-portfolio.vercel.app/admin

### What You Can Do

✅ **Upload/Update CV**: Replace your resume PDF anytime
✅ **Edit About Section**: Update your bio, headings, and paragraphs
✅ **Manage Contact Info**: Update email, GitHub, and LinkedIn URLs
✅ **Manage Projects**: Add, edit, or delete projects

### Files Changed

- Password now stored in `.env.local` (local) and Vercel (production)
- Password removed from source code ✅
- `.env.local` excluded from git ✅
- Added `.env.example` for documentation ✅

### Security Improvements

✅ Password stored in environment variables
✅ Not committed to GitHub repository
✅ Separate passwords possible for dev/staging/production
✅ Easy to rotate passwords without code changes

⚠️ Note: Current implementation uses client-side auth. For full production security, consider NextAuth.js or Auth0.

---

See `VERCEL_SETUP.md` for detailed instructions.
See `ADMIN_GUIDE.md` for admin panel usage.
