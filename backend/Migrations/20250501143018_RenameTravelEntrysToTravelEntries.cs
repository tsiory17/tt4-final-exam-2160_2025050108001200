using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class RenameTravelEntrysToTravelEntries : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TravelEntrys",
                table: "TravelEntrys");

            migrationBuilder.RenameTable(
                name: "TravelEntrys",
                newName: "TravelEntries");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TravelEntries",
                table: "TravelEntries",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_TravelEntries",
                table: "TravelEntries");

            migrationBuilder.RenameTable(
                name: "TravelEntries",
                newName: "TravelEntrys");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TravelEntrys",
                table: "TravelEntrys",
                column: "Id");
        }
    }
}
