const supabaseUrl = 'https://fvtsjqsmcyyohrkgerpe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2dHNqcXNtY3l5b2hya2dlcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2MTY1NDksImV4cCI6MjA4NzE5MjU0OX0.qVPNT5-J9b0hebwmcK3XnyCqvJ-mvec4o3zFik4L7CY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function loadMenus() {
  const { data } = await supabase.from('menus').select('*');
  const list = document.getElementById('menuList');
  list.innerHTML = '';
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + " - $" + item.price;
    list.appendChild(li);
  });
}

loadMenus();
