#!/usr/bin/env python3
"""Generate a white-background PDF curriculum for AI for Decision Makers."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas

# Colors — light/white theme
WHITE = HexColor("#ffffff")
NEAR_BLACK = HexColor("#1a1a2e")
DARK_TEXT = HexColor("#1e293b")
MID_TEXT = HexColor("#475569")
LIGHT_TEXT = HexColor("#64748b")
BLUE = HexColor("#2563eb")
GREEN = HexColor("#16a34a")
PURPLE = HexColor("#7c3aed")
AMBER = HexColor("#d97706")
LIGHT_BLUE_BG = HexColor("#eff6ff")
LIGHT_GREEN_BG = HexColor("#f0fdf4")
LIGHT_PURPLE_BG = HexColor("#f5f3ff")
LIGHT_GRAY_BG = HexColor("#f8fafc")
BORDER_GRAY = HexColor("#e2e8f0")
ACCENT_GRAY = HexColor("#cbd5e1")

OUTPUT_PATH = "/Users/ernestolee/ClaudeProjects/drlee_ai/public/ai-for-decision-makers-curriculum.pdf"


class CurriculumPDF:
    def __init__(self, filename):
        self.filename = filename
        self.width, self.height = letter  # 8.5 x 11
        self.margin = 0.5 * inch

    def draw_header(self, c, w, h):
        """Draw the header section on page 1."""
        y = h - 0.45 * inch

        # Top accent bar
        c.setFillColor(BLUE)
        c.rect(0, h - 4, w, 4, fill=1, stroke=0)

        # Badge
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(WHITE)
        badge_text = "FLAGSHIP"
        badge_w = c.stringWidth(badge_text, "Helvetica-Bold", 7) + 12
        c.setFillColor(BLUE)
        c.roundRect(self.margin, y - 10, badge_w, 14, 3, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.drawString(self.margin + 6, y - 6, badge_text)

        c.setFont("Helvetica", 7.5)
        c.setFillColor(LIGHT_TEXT)
        c.drawString(self.margin + badge_w + 8, y - 6,
                     "2-Day Bootcamp  |  No Coding Required  |  AI Readiness Assessment Included")

        y -= 28

        # Title
        c.setFont("Helvetica-Bold", 24)
        c.setFillColor(NEAR_BLACK)
        c.drawString(self.margin, y, "AI for Decision Makers")
        y -= 20

        # Subtitle
        c.setFont("Helvetica-Bold", 11)
        c.setFillColor(GREEN)
        c.drawString(self.margin, y, "Lead Smarter. Decide Faster. Amplify What Matters.")
        y -= 14

        # Hook
        c.setFont("Helvetica", 7.5)
        c.setFillColor(MID_TEXT)
        c.drawString(self.margin, y,
                     "A hands-on experience that gives organizational leaders the clarity, confidence, and practical tools to use AI")
        y -= 10
        c.drawString(self.margin, y,
                     "as a force multiplier for the decisions that drive your mission forward.")
        y -= 14

        # Divider
        c.setStrokeColor(BORDER_GRAY)
        c.setLineWidth(0.5)
        c.line(self.margin, y, w - self.margin, y)
        y -= 4

        return y

    def draw_step(self, c, x, y, step_num, title, lessons, color, bg_color, col_w):
        """Draw a single curriculum step with lessons. Returns new y position."""
        card_padding = 8
        lesson_line_h = 8.5
        title_h = 14
        # Calculate card height
        card_h = title_h + 6 + len(lessons) * lesson_line_h + 6

        # Card background
        c.setFillColor(bg_color)
        c.roundRect(x, y - card_h, col_w, card_h, 4, fill=1, stroke=0)

        # Left accent border
        c.setFillColor(color)
        c.rect(x, y - card_h, 3, card_h, fill=1, stroke=0)

        # Step number circle
        circle_x = x + 16
        circle_y = y - 11
        c.setFillColor(color)
        c.circle(circle_x, circle_y, 8, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 7.5)
        c.drawCentredString(circle_x, circle_y - 2.5, str(step_num))

        # Step title
        c.setFillColor(NEAR_BLACK)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(x + 28, y - 13, title)

        # Lessons
        lesson_y = y - 26
        c.setFont("Helvetica", 6.2)
        for lesson in lessons:
            c.setFillColor(color)
            c.drawString(x + 14, lesson_y + 1, "\u2022")
            c.setFillColor(MID_TEXT)
            # Truncate if too long for column
            max_chars = int(col_w / 3.2)
            display = lesson if len(lesson) <= max_chars else lesson[:max_chars - 2] + "..."
            c.drawString(x + 22, lesson_y, display)
            lesson_y -= lesson_line_h

        return y - card_h

    def build(self):
        c = canvas.Canvas(self.filename, pagesize=letter)
        w, h = self.width, self.height

        # ===================== PAGE 1 =====================
        # White background
        c.setFillColor(WHITE)
        c.rect(0, 0, w, h, fill=1)

        y = self.draw_header(c, w, h)

        # === SECTION: Your 9-Step Leadership Journey ===
        y -= 8
        c.setFont("Helvetica-Bold", 13)
        c.setFillColor(NEAR_BLACK)
        c.drawString(self.margin, y, "Your 9-Step Leadership Journey")
        y -= 6

        # Curriculum data
        stages = [
            ("DAY 1 MORNING", "Clarity", BLUE, LIGHT_BLUE_BG, [
                (1, "Demystifying AI", [
                    "What AI Is Great At and What It's Terrible At",
                    "The Hype vs. The Reality: Cutting Through the Noise",
                    "How AI Can Serve Mission-Driven Work",
                    "Live Demo: AI on Real Organizational Data",
                    "Reviewing Your AI Readiness Assessment",
                    "Setting Your Intentions for the Bootcamp",
                ]),
                (2, "Your Data Is More Valuable Than You Think", [
                    "Discovering the Data Assets Hiding in Plain Sight",
                    "Connecting Spreadsheets, Reports, and Impact Metrics",
                    "Organizing Your Organization's Knowledge",
                    "Making Your Data AI-Ready (No Technical Skills)",
                    "Privacy: Protecting Beneficiary and Donor Info",
                    "Ethical Foundation for Mission-Driven Orgs",
                    "Hands-On: Load Your First Real Dataset",
                ]),
                (3, "Asking AI the Right Questions", [
                    "Why the Question Matters More Than the Tool",
                    "How AI Reasoning Works (In Plain Language)",
                    "The Art of the Prompt: Useful, Specific Answers",
                    "Building Your First AI Workflow on Your Data",
                    "When to Trust the Answer, When to Push Back",
                    "Simple Techniques for Dramatically Better Results",
                    "Hands-On: Your First AI-Powered Analysis",
                ]),
            ]),
            ("DAY 1 PM \u2013 DAY 2 AM", "Capability", PURPLE, LIGHT_PURPLE_BG, [
                (4, "Teaching AI Your Organization", [
                    "Why Generic AI Gives Generic Answers",
                    "Grounding AI in YOUR Documents and History",
                    "Building Your Organization's Knowledge Library",
                    "From Generic to Specific: Watch AI Transform",
                    "Hands-On: Connect Your Knowledge Library",
                    "Trust and Verification: Citing Real Data",
                    "Responsible AI for Real Communities",
                ]),
                (5, "Funding, Finance & Fundraising", [
                    "See Your Financial and Funding Picture in Minutes",
                    "Connecting Budgets, Grants, Revenue, Donors",
                    "Surfacing Trends in Spending and Giving",
                    "Scenario Planning: 'What If This Grant Ends?'",
                    "Donor Intelligence and Major Gift Signals",
                    "Hands-On: AI Financial & Fundraising Analysis",
                    "Board-Ready Insights in the Format Leaders Use",
                ]),
                (6, "Seeing Your Impact More Clearly", [
                    "AI Helps You See, Prove, and Grow Your Impact",
                    "Connecting Beneficiary Outcomes and Metrics",
                    "AI-Assisted Program Analysis: What's Working",
                    "Data to Story: Compelling Funder Narratives",
                    "Funder Reporting: Data-Backed Summaries",
                    "Hands-On: Analyze a Real Program",
                    "From Insight to Action: Strengthen What Works",
                ]),
            ]),
            ("DAY 2 AFTERNOON", "Leadership", GREEN, LIGHT_GREEN_BG, [
                (7, "Meta-Prompting", [
                    "What Meta-Prompting Is and Why It Matters",
                    "Designing Prompts for Expert-Level Responses",
                    "Chain-of-Thought: Getting AI to Show Its Work",
                    "Role-Based Prompting: Analyst, Evaluator, Strategist",
                    "Building Reusable Templates for Your Team",
                    "Hands-On: Create a Meta-Prompt Library",
                    "When to Trust Output vs. Redesign the Prompt",
                ]),
                (8, "Your AI Toolkit", [
                    "The AI Tool Landscape for Non-Technical Leaders",
                    "Evaluating Tools: What to Look For and Avoid",
                    "No-Code Platforms You Can Use Monday Morning",
                    "Connecting Tools to Email, Calendars, Workflows",
                    "Automating Repetitive Weekly Analysis Tasks",
                    "Hands-On: Build a Complete AI Workflow",
                    "Security and Privacy for Mission-Driven Orgs",
                ]),
                (9, "Bringing It All Together", [
                    "How Everything You've Built Works Together",
                    "Cross-Domain: Financial + Impact = Bigger Story",
                    "Your Decision Dashboard: One Place for Insights",
                    "Setting Up Simple Weekly Automations",
                    "Growing AI Capabilities as Confidence Grows",
                    "Keeping It Current: Updating With Fresh Data",
                    "Your 90-Day AI Adoption Roadmap",
                ]),
            ]),
        ]

        # Layout: 3 columns, 3 rows (one stage per column-group)
        col_w = (w - 2 * self.margin - 16) / 3
        gap = 8

        for stage_idx, (time_label, stage_name, color, bg_color, steps) in enumerate(stages):
            # Stage header
            stage_y = y - 12
            c.setFont("Helvetica-Bold", 6)
            c.setFillColor(color)
            c.drawString(self.margin, stage_y, time_label)

            c.setFont("Helvetica-Bold", 9)
            c.setFillColor(NEAR_BLACK)
            stage_label_x = self.margin + c.stringWidth(time_label, "Helvetica-Bold", 6) + 8
            c.drawString(stage_label_x, stage_y, stage_name)

            # Decorative line after stage name
            line_x = stage_label_x + c.stringWidth(stage_name, "Helvetica-Bold", 9) + 8
            c.setStrokeColor(BORDER_GRAY)
            c.setLineWidth(0.5)
            c.line(line_x, stage_y + 3, w - self.margin, stage_y + 3)

            y = stage_y - 10

            # Draw 3 steps side by side
            step_bottoms = []
            for i, (step_num, title, lessons) in enumerate(steps):
                x = self.margin + i * (col_w + gap)
                bottom = self.draw_step(c, x, y, step_num, title, lessons, color, bg_color, col_w)
                step_bottoms.append(bottom)

            y = min(step_bottoms) - 8

        # ===================== WHAT'S INCLUDED BAR =====================
        y -= 2
        bar_h = 0.5 * inch
        c.setFillColor(LIGHT_GRAY_BG)
        c.roundRect(self.margin, y - bar_h, w - 2 * self.margin, bar_h, 4, fill=1, stroke=0)
        c.setStrokeColor(BORDER_GRAY)
        c.setLineWidth(0.5)
        c.roundRect(self.margin, y - bar_h, w - 2 * self.margin, bar_h, 4, fill=0, stroke=1)

        includes = [
            ("AI Readiness Assessment", "Personalized pre-bootcamp\nevaluation for every participant"),
            ("Hands-On With YOUR Data", "Bring your real data \u2014 leave\nwith working AI tools"),
            ("90-Day Roadmap", "Realistic next steps to deepen\nAI adoption at your pace"),
            ("No Coding Required", "Designed for leaders who run\norganizations, not write code"),
        ]

        inc_w = (w - 2 * self.margin) / 4
        for i, (title, desc) in enumerate(includes):
            ix = self.margin + i * inc_w + 10
            c.setFont("Helvetica-Bold", 6.5)
            c.setFillColor(GREEN)
            c.drawString(ix, y - 14, title)
            c.setFont("Helvetica", 5.5)
            c.setFillColor(LIGHT_TEXT)
            for j, line in enumerate(desc.split("\n")):
                c.drawString(ix, y - 23 - j * 7, line)

        y -= bar_h + 10

        # ===================== DELIVERY OPTIONS =====================
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(NEAR_BLACK)
        c.drawString(self.margin, y, "Delivery Options")
        y -= 13

        options = [
            ("2-Day Immersive Bootcamp", "$4,997", "2 full days, 9am\u20135pm. Build everything live. Leave with a working system.", GREEN),
            ("4 Half-Day Sessions", "$4,997", "Same content over 2 weeks (4 \u00d7 4hrs). Perfect for packed calendars.", GREEN),
            ("4-Week Live Cohort", "$3,997", "Weekly sessions with Dr. Lee. Build one capability per week.", BLUE),
            ("Self-Paced", "$1,497", "All 9 modules. Lifetime access. Learn on your schedule.", LIGHT_TEXT),
            ("Organization Edition", "$14,997", "1:1 with Dr. Lee. Custom AI strategy for your mission.", PURPLE),
        ]

        for title, price, desc, color in options:
            c.setFillColor(color)
            c.circle(self.margin + 4, y - 1, 2, fill=1, stroke=0)
            c.setFont("Helvetica-Bold", 6.5)
            c.setFillColor(NEAR_BLACK)
            c.drawString(self.margin + 11, y - 3, title)
            price_x = self.margin + 11 + c.stringWidth(title, "Helvetica-Bold", 6.5) + 5
            c.setFillColor(color)
            c.drawString(price_x, y - 3, price)
            desc_x = price_x + c.stringWidth(price, "Helvetica-Bold", 6.5) + 8
            c.setFont("Helvetica", 6)
            c.setFillColor(LIGHT_TEXT)
            c.drawString(desc_x, y - 3, desc)
            y -= 11

        y -= 4

        # ===================== FOOTER =====================
        c.setStrokeColor(BORDER_GRAY)
        c.setLineWidth(0.5)
        c.line(self.margin, y, w - self.margin, y)
        y -= 11

        c.setFont("Helvetica-Bold", 7.5)
        c.setFillColor(NEAR_BLACK)
        c.drawString(self.margin, y, "DrLee.ai")
        c.setFont("Helvetica", 6.5)
        c.setFillColor(LIGHT_TEXT)
        c.drawString(self.margin + c.stringWidth("DrLee.ai", "Helvetica-Bold", 7.5) + 6, y,
                     "AI Education for Leaders Who Make Decisions That Matter")

        c.setFont("Helvetica", 6.5)
        c.setFillColor(BLUE)
        c.drawRightString(w - self.margin, y, "drlee.ai/courses/ai-for-decision-makers")

        y -= 10
        c.setFont("Helvetica-Oblique", 5.5)
        c.setFillColor(LIGHT_TEXT)
        c.drawString(self.margin, y, '"Your mission is too important for guesswork. Lead with data."')

        c.save()
        print(f"PDF generated: {self.filename}")


if __name__ == "__main__":
    pdf = CurriculumPDF(OUTPUT_PATH)
    pdf.build()
