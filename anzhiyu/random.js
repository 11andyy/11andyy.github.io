var posts=["2024/05/27/408/操作系统/","2024/10/16/AutonomousDriving/GNSS/","2024/03/17/408/数据结构/","2024/04/27/408/计算机组成原理/","2024/10/06/AutonomousDriving/PathPlanning/","2024/03/27/408/计算机网络/","2024/07/30/AutonomousDriving/carla/","2024/07/29/Tutorial/Github图床/","2024/08/07/Tutorial/WSL安装/","2023/02/07/Tutorial/服务器使用/","2024/08/30/Tutorial/李觅青人像课/","2024/10/20/WeeklyReport/PaperReading/","2024/10/20/WeeklyReport/周记/","2024/08/01/AutonomousDriving/easyRL/","2024/07/27/Language/Python/","2023/04/27/Tools/Anaconda/","2024/10/06/Tools/CMake/","2023/05/20/Tools/Git/","2023/04/30/Tools/Docker/","2024/01/17/Tools/Latex/","2023/04/27/Tools/SSH SCP/","2023/04/27/Tools/Linux/","2023/04/28/Tools/Vim Tmux配置/","2023/06/13/Tools/Tmux/","2023/05/15/Tools/Vim/","2023/09/27/Tools/管道/","2024/07/29/AutonomousDriving/ros/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };