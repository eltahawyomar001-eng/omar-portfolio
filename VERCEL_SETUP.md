# Vercel Deployment Setup

## Setting Environment Variables

After deploying to Vercel, you need to add the admin password as an environment variable:

### Step-by-Step Instructions

1. **Go to Vercel Dashboard**
   - Visit [https://vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your `omar-portfolio` project

2. **Navigate to Settings**
   - Click on the **Settings** tab at the top

3. **Add Environment Variable**
   - Click **Environment Variables** in the left sidebar
   - Click **Add New**

4. **Configure the Variable**
   - **Name**: `NEXT_PUBLIC_ADMIN_PASSWORD`
   - **Value**: `34023012563Meer@` (or your chosen password)
   - **Environments**: Select all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development

5. **Save and Redeploy**
   - Click **Save**
   - Go to **Deployments** tab
   - Click the **...** menu on your latest deployment
   - Select **Redeploy**

### Verification

After redeployment completes:
1. Visit `https://your-site.vercel.app/admin`
2. Enter your password
3. You should be able to log in successfully

### Security Tips

- ✅ Use a strong, unique password
- ✅ Don't share your environment variables
- ✅ Rotate passwords periodically
- ✅ Use different passwords for staging and production

### Troubleshooting

**"Incorrect password" error?**
- Make sure the environment variable name is exactly: `NEXT_PUBLIC_ADMIN_PASSWORD`
- Verify the value is saved correctly (no extra spaces)
- Ensure you redeployed after adding the variable
- Clear browser cache and try again

**Can't access admin page?**
- Check that the deployment completed successfully
- Look for build errors in Vercel deployment logs
- Verify the `/admin` route is accessible

## Need Help?

Check the full [Admin Guide](./ADMIN_GUIDE.md) for detailed usage instructions.
