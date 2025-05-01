using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelEntryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TravelEntryController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/TravelEntry
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TravelEntry>>> GetAllTravelEntries()
        {
             return await _context.TravelEntries.ToListAsync();
           
        }

        // GET: api/TravelEntry/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TravelEntry>> GetTravelEntry(int id)
        {
            var travelEntry = await _context.TravelEntries.FindAsync(id);
            if (travelEntry == null)
            {
                return NotFound();
            }
            return travelEntry;
        }

        // POST: api/TravelEntry
        [HttpPost]
        public async Task<ActionResult<TravelEntry>> PostTravelEntry(TravelEntry travelEntry)
        {
            _context.TravelEntries.Add(travelEntry);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTravelEntry), new { id = travelEntry.Id }, travelEntry);
        }

        // PUT: api/TravelEntry/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTravelEntry(int id, TravelEntry travelEntry)
        {
            if (id != travelEntry.Id)
                return BadRequest();

            _context.Entry(travelEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TravelEntryExists(id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/TravelEntry/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTravelEntry(int id)
        {
            var travelEntry = await _context.TravelEntries.FindAsync(id);
            if (travelEntry == null)
            {
                return NotFound();
            }

            _context.TravelEntries.Remove(travelEntry);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TravelEntryExists(int id)
        {
            return _context.TravelEntries.Any(e => e.Id == id);
        }
    }
}
