namespace jokesandjokes.Models
{
    public class Monster
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string OuterRed{  get; set; }
        public string OuterGreen { get; set; }
        public string OuterBlue { get; set; }

        public string InnerRed { get; set; }
        public string InnerGreen { get; set; }
        public string InnerBlue { get; set; }

        public int  TopRoundness { get; set; }
        public int BottomRoundness { get; set; }
        public int Height { get; set; }
        public int Width{ get; set; }
        public int MouthWidth { get; set; }
        public int EyeHeight { get; set; }
        public int EyeNumber { get; set; }

        public bool alive {get; set; }
    }
}
