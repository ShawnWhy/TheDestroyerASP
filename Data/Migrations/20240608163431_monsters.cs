using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace jokesandjokes.Data.Migrations
{
    /// <inheritdoc />
    public partial class monsters : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Monster",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OuterRed = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OuterGreen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OuterBlue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InnerRed = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InnerGreen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    InnerBlue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TopRoundness = table.Column<int>(type: "int", nullable: false),
                    BottomRoundness = table.Column<int>(type: "int", nullable: false),
                    Height = table.Column<int>(type: "int", nullable: false),
                    Width = table.Column<int>(type: "int", nullable: false),
                    MouthWidth = table.Column<int>(type: "int", nullable: false),
                    EyeHeight = table.Column<int>(type: "int", nullable: false),
                    EyeNumber = table.Column<int>(type: "int", nullable: false),
                    alive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Monster", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Monster");
        }
    }
}
